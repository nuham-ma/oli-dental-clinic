Add-Type -AssemblyName System.Drawing
$checkList = @('service_brace_clean.jpg', 'service_filling_clean.jpg', 'service_zirconia_clean.jpg', 'service_instrument_clean.jpg', 'dental2.jpg')
foreach ($f in $checkList) {
    $bmp = New-Object System.Drawing.Bitmap("C:\Users\DELLL\.gemini\antigravity\scratch\oli-dental-clinic\public\images\$f")
    Write-Host "=== $f ($($bmp.Width) x $($bmp.Height)) ==="
    $blackRows = 0
    for ($y = 0; $y -lt $bmp.Height; $y += 20) {
        $rowBlack = $true
        for ($x = 0; $x -lt $bmp.Width; $x += 20) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.R -gt 25 -or $c.G -gt 25 -or $c.B -gt 25) {
                $rowBlack = $false
                break
            }
        }
        if ($rowBlack) { $blackRows++ }
    }
    Write-Host "  Black rows sampled: $blackRows"
    $bmp.Dispose()
}
