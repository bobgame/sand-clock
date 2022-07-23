call npm run build
rd /s /q .\docs\
xcopy .\build .\docs\ /s /e /y