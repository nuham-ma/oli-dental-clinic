Add-Type -AssemblyName System.Drawing
$images = @('brace.jpg', 'dental2.jpg', 'filling.jpg', 'zirconiya.jpg', 'instrument.jpg')
foreach ($imgName in $images) {
    $path = "C:\Users\DELLL\.gemini\antigravity\scratch\oli-dental-clinic\public\images\$imgName"
    $bmp = New-Object System.Drawing.Bitmap($path)
    Write-Host "=== $imgName ==="
    for ($y = 0; $y -lt $bmp.Height; $y += 100) {
        $c = $bmp.GetPixel([int]($bmp.Width/2), $y)
        Write-Host "  y=$y : R=$($c.R), G=$($c.G), B=$($c.B)"
    }
    $bmp.Dispose()
}
