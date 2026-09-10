Add-Type -AssemblyName System.Drawing

function Crop-Clean-Image($srcFile, $outFile, $yStart, $yHeight) {
    $path = "C:\Users\DELLL\.gemini\antigravity\scratch\oli-dental-clinic\public\images\$srcFile"
    $bmp = New-Object System.Drawing.Bitmap($path)
    
    $w = $bmp.Width
    $rect = New-Object System.Drawing.Rectangle(0, $yStart, $w, $yHeight)
    $crop = New-Object System.Drawing.Bitmap($w, $yHeight)
    $g = [System.Drawing.Graphics]::FromImage($crop)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0, 0, $w, $yHeight)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    $out = "C:\Users\DELLL\.gemini\antigravity\scratch\oli-dental-clinic\public\images\$outFile"
    $crop.Save($out, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $crop.Dispose()
    $bmp.Dispose()
    Write-Host "Created clean uncropped photo: $outFile (Width: $w, Height: $yHeight)"
}

# 1. Braces: start at y=60 to y=520 (Height 460) - completely pure teeth with braces
Crop-Clean-Image "brace.jpg" "service_brace_clean.jpg" 60 460

# 2. Dental Filling: y=20 to y=520 (Height 500)
Crop-Clean-Image "filling.jpg" "service_filling_clean.jpg" 20 500

# 3. Zirconia Crown: y=20 to y=520 (Height 500)
Crop-Clean-Image "zirconiya.jpg" "service_zirconia_clean.jpg" 20 500

# 4. Instruments: y=50 to y=570 (Height 520)
Crop-Clean-Image "instrument.jpg" "service_instrument_clean.jpg" 50 520
