Add-Type -AssemblyName System.Drawing
function Analyze-Grid($filename) {
    $path = "C:\Users\DELLL\.gemini\antigravity\brain\03dcbd86-e651-4c10-8e09-6dad2e24d1fa\.user_uploaded\$filename"
    $bmp = New-Object System.Drawing.Bitmap($path)
    Write-Host "Analyzing $filename ($($bmp.Width) x $($bmp.Height))"
    # Let's save a grid of 4 quadrants: TopLeft, TopRight, BottomLeft, BottomRight
    $w2 = [int]($bmp.Width / 2)
    $h2 = [int]($bmp.Height / 2)
    
    $crops = @(
        @{ Name="q1"; Rect=(New-Object System.Drawing.Rectangle(0, 0, $w2, $h2)) },
        @{ Name="q2"; Rect=(New-Object System.Drawing.Rectangle($w2, 0, $w2, $h2)) },
        @{ Name="q3"; Rect=(New-Object System.Drawing.Rectangle(0, $h2, $w2, $h2)) },
        @{ Name="q4"; Rect=(New-Object System.Drawing.Rectangle($w2, $h2, $w2, $h2)) }
    )
    
    foreach ($c in $crops) {
        $cropBmp = New-Object System.Drawing.Bitmap($w2, $h2)
        $g = [System.Drawing.Graphics]::FromImage($cropBmp)
        $g.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0,0,$w2,$h2)), $c.Rect, [System.Drawing.GraphicsUnit]::Pixel)
        $g.Dispose()
        $outPath = "C:\Users\DELLL\.gemini\antigravity\scratch\oli-dental-clinic\public\images\test_$($filename.Substring(0,10))_$($c.Name).jpg"
        $cropBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $cropBmp.Dispose()
        Write-Host "Saved $outPath"
    }
    $bmp.Dispose()
}

Analyze-Grid "media_1787718905516.jpg"
Analyze-Grid "media_1787718913893.jpg"
