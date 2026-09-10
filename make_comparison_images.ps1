Add-Type -AssemblyName System.Drawing

function Split-Before-After($filename, $name) {
    $path = "C:\Users\DELLL\.gemini\antigravity\scratch\oli-dental-clinic\public\images\$filename"
    $bmp = New-Object System.Drawing.Bitmap($path)
    $w = $bmp.Width
    $h = $bmp.Height
    Write-Host "Processing $filename ($w x $h)"
    
    # 1. Top (Before) - typically y=30 to y=570
    $hBefore = [int]($h * 0.46)
    $rectBefore = New-Object System.Drawing.Rectangle(0, [int]($h * 0.03), $w, $hBefore)
    $bmpBefore = New-Object System.Drawing.Bitmap($w, $hBefore)
    $g1 = [System.Drawing.Graphics]::FromImage($bmpBefore)
    $g1.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g1.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0, 0, $w, $hBefore)), $rectBefore, [System.Drawing.GraphicsUnit]::Pixel)
    $g1.Dispose()
    $outBefore = "C:\Users\DELLL\.gemini\antigravity\scratch\oli-dental-clinic\public\images\${name}_before.jpg"
    $bmpBefore.Save($outBefore, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmpBefore.Dispose()
    
    # 2. Bottom (After) - typically y=h*0.52 to y=h*0.97
    $hAfter = [int]($h * 0.46)
    $rectAfter = New-Object System.Drawing.Rectangle(0, [int]($h * 0.52), $w, $hAfter)
    $bmpAfter = New-Object System.Drawing.Bitmap($w, $hAfter)
    $g2 = [System.Drawing.Graphics]::FromImage($bmpAfter)
    $g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g2.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0, 0, $w, $hAfter)), $rectAfter, [System.Drawing.GraphicsUnit]::Pixel)
    $g2.Dispose()
    $outAfter = "C:\Users\DELLL\.gemini\antigravity\scratch\oli-dental-clinic\public\images\${name}_after.jpg"
    $bmpAfter.Save($outAfter, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmpAfter.Dispose()
    
    # 3. Seamless Combined Before & After side-by-side with crisp divider and NO black bars!
    $combW = $w * 2
    $combH = $hBefore
    $bmpComb = New-Object System.Drawing.Bitmap($combW, $combH)
    $g3 = [System.Drawing.Graphics]::FromImage($bmpComb)
    $g3.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g3.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0, 0, $w, $combH)), $rectBefore, [System.Drawing.GraphicsUnit]::Pixel)
    $g3.DrawImage($bmp, (New-Object System.Drawing.Rectangle($w, 0, $w, $combH)), $rectAfter, [System.Drawing.GraphicsUnit]::Pixel)
    $g3.Dispose()
    $outComb = "C:\Users\DELLL\.gemini\antigravity\scratch\oli-dental-clinic\public\images\${name}_comparison.jpg"
    $bmpComb.Save($outComb, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmpComb.Dispose()
    
    Write-Host "Created ${name}_before.jpg, ${name}_after.jpg, and ${name}_comparison.jpg ($combW x $combH, Aspect: $([Math]::Round($combW/$combH, 2)))"
    $bmp.Dispose()
}

Split-Before-After "brace.jpg" "brace"
Split-Before-After "filling.jpg" "filling"
Split-Before-After "zirconiya.jpg" "zirconia"
