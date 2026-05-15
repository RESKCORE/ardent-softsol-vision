$nodePath = 'C:\Program Files\nodejs'
$machinePath = [Environment]::GetEnvironmentVariable('Path','Machine')
$parts = $machinePath -split ';' | Where-Object { $_ -and $_ -ne '' }
if (-not ($parts -contains $nodePath)) { $parts = ,$nodePath + $parts }
$toRemove = @('C:\nvm4w\v20.11.1\nodejs','C:\Users\Hp\AppData\Local\nvm')
$parts = $parts | Where-Object { $toRemove -notcontains $_ }
[Environment]::SetEnvironmentVariable('Path', ($parts -join ';'), 'Machine')
Write-Output 'Updated Machine PATH:'
Write-Output ([Environment]::GetEnvironmentVariable('Path','Machine'))
