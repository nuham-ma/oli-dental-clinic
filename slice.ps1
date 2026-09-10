Add-Type -AssemblyName System.Drawing

function Inspect-Collage($filename, $prefix) {
    $path = "C:\Users\DELLL\.gemini\antigravity\brain\03dcbd86-e651-4c10-8e09-6dad2e24d1fa\.user_uploaded\$filename"
    $bmp = New-Object System.Drawing.Bitmap($path)
    
    # Save 4 distinct slices or quadrants
    $w = $bmp.Width
    $h = $bmp.Height
    
    # Let's save 4 quadrants:
    # 1: top-left (0, 0, w/2, h/2)
    # 2: top-right (w/2, 0, w/2, h/2)
    # 3: bottom-left (0, h/2, w/2, h/2)
    # 4: bottom-right (w/2, h/2, w/2, h/2)
    $halfW = [int]($w/2)
    $halfH = [int]($h/2)
    
    $rects = @(
        @{ Name="${prefix}_top_left"; Rect=(New-Object System.Drawing.Rectangle(0, 0, $halfW, $halfH)) },
        @{ Name="${prefix}_top_right"; Rect=(New-Object System.Drawing.Rectangle($halfW, 0, $halfW, $halfH)) },
        @{ Name="${prefix}_bottom_left"; Rect=(New-Object System.Drawing.Rectangle(0, $halfH, $halfW, $halfH)) },
        @{ Name="${prefix}_bottom_right"; Rect=(New-Object System.Drawing.Rectangle($halfW, $halfH, $halfW, $halfH)) }
    )
    
    foreach ($r in $rects) {
        $crop = New-Object System.Drawing.Bitmap($halfW, $halfH)
        $g = [System.Drawing.Graphics]::FromImage($crop)
        $g.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0,0,$halfW,$halfH)), $r.Rect, [System.Drawing.GraphicsUnit]::Pixel)
        $g.Dispose()
        $out = "C:\Users\DELLL\.gemini\antigravity\scratch\oli-dental-clinic\public\images\$($r.Name).jpg"
        $crop.Save($out, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $crop.Dispose()
        Write-Host "Created $out"
    }
    $bmp.Dispose()
}

Inspect-Collage "media_1787718905516.jpg" "collA"
Inspect-Collage "media_1787718913893.jpg" "collB"
