call npm run build
rd /s /q .\docs\
xcopy .\build .\docs\ /s /e /y
xcopy .\docs\assets\NoSleep.min.js .\docs\static\ /s /e /y