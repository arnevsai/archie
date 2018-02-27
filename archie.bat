::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCuDJHqM5k09LT9bWwqOM2q+FYkd+PjE57jQnUQeW+xxcYzUug==
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSTk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+IeA==
::cxY6rQJ7JhzQF1fEqQJhZksaHErSXA==
::ZQ05rAF9IBncCkqN+0xwdVsFAlTMbCXqZg==
::ZQ05rAF9IAHYFVzEqQIROhhcRQHCD2qzZg==
::eg0/rx1wNQPfEVWB+kM9LVsJDAWQP2OzA/sZ8O2b
::fBEirQZwNQPfEVWB+kM9LVsJDCWQP2OzA4Yd4Yg=
::cRolqwZ3JBvQF1fEqQIROhhcRQHCD2qzRpEV++v0/e7HgEIJNA==
::dhA7uBVwLU+EWHiX/FUxOh4UCkSjLmW/EPUv6eG7y++R4nkYVe9f
::YQ03rBFzNR3SWATE1VAzIBJRDDeDNSf6J6cS7f673OuOwg==
::dhAmsQZ3MwfNWATEvGF5aDpHRBODLm76QPU9+ub++aq0o0RdcOcpOLve27nOcrBCsguE
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRmltGY5OxhbXgDCPmSuR9U=
::Zh4grVQjdCuDJFiW+kcmFwhVRTuAM3+GB6cf4OH+0+uVoUUUUaw6YIq7
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
title ArchieSai [127.0.0.1]
if not exist "%programfiles%\nodejs\node.exe" (
    echo Node.js is not installed!
    echo Get it here: http://nodejs.org
    echo.
    echo Hit return to exit.
    pause > nul
    goto end
)
echo Starting Archie Sai...
if not exist "bot.js" (
    echo An essential file to run Archie is missing. Please reinstall Archie to fix this issue.
    echo.
    pause>nul
)
node bot.js
if "%ERRORLEVEL%"=="1" (
	echo Archie has not exited successfully. Press any key to exit.
)
:end
