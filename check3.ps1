Add-Type -AssemblyName System.Drawing
$uploads = @('media_1787718905516.jpg', 'media_1787718913893.jpg')
foreach ($f in $uploads) {
    $path = "C:\Users\DELLL\.gemini\antigravity\brain\03dcbd86-e651-4c10-8e09-6dad2e24d1fa\.user_uploaded\$f"
    $bmp = New-Object System.Drawing.Bitmap($path)
    Write-Host "$f : Width=$($bmp.Width), Height=$($bmp.Height)"
    $bmp.Dispose()
}
