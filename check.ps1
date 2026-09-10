Add-Type -AssemblyName System.Drawing
$images = @('brace.jpg', 'dental2.jpg', 'filling.jpg', 'zirconiya.jpg', 'instrument.jpg')
foreach ($imgName in $images) {
    $path = "C:\Users\DELLL\.gemini\antigravity\scratch\oli-dental-clinic\public\images\$imgName"
    $bmp = New-Object System.Drawing.Bitmap($path)
    Write-Host "=== $imgName ($($bmp.Width) x $($bmp.Height)) ==="
    
    # Check top boundary of non-black pixels
    $top = 0
    for ($y = 0; $y -lt $bmp.Height; $y += 5) {
        $nonBlack = $false
        for ($x = 0; $x -lt $bmp.Width; $x += 20) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.R -gt 25 -or $c.G -gt 25 -or $c.B -gt 25) {
                $nonBlack = $true
                break
            }
        }
        if ($nonBlack) { $top = $y; break }
    }
    
    # Check bottom boundary of non-black pixels
    $bottom = $bmp.Height - 1
    for ($y = $bmp.Height - 1; $y -ge 0; $y -= 5) {
        $nonBlack = $false
        for ($x = 0; $x -lt $bmp.Width; $x += 20) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.R -gt 25 -or $c.G -gt 25 -or $c.B -gt 25) {
                $nonBlack = $true
                break
            }
        }
        if ($nonBlack) { $bottom = $y; break }
    }
    
    Write-Host "Content bounds: y=$top to y=$bottom (content height: $($bottom - $top))"
    $bmp.Dispose()
}
