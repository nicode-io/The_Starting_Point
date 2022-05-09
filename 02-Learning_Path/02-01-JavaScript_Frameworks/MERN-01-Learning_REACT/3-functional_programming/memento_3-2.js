// Chapter 3. Functional Programming - Memento 3.2

// INDEX
// @12  Functions over values
// @18  Transforming data
// @40  Higher-order functions
// @58  Composition
// @93  Start the clock

// Final Exercise - Make a clock

    //  Use functions over values 
    const oneSecond = () => 1000
    const getCurrentTime = () => new Date()
    const clear = () => console.clear()
    const log = message => console.log(message)
    
    // Transforming data - Mutate the date object
    const abstractClockTime = date =>
        ({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        })

    const civilianHours = clockTime =>
        ({
            ...clockTime,
            hours: (clockTime.hours > 12) ?
            clockTime.hours - 12 :
                clockTime.hours
        })

    const appendAMPM = clockTime =>
        ({
            ...clockTime,
            ampm: (clockTime.hours >= 12) ? "PM" : "AM"
        })

    // Higher-order functions
    const display = target => time => target(time)

    const formatClock = format =>
        time =>
            format.replace("hh", time.hours)
                .replace("mm", time.minutes)
                .replace("ss", time.seconds)
                .replace("tt", time.ampm)

    const prependZero = key => clockTime =>
        ({
            ...clockTime,
            [key]: (clockTime[key] < 10) ?
            "0" + clockTime[key] :
                clockTime[key]
        })

    // Composition
    const compose = (...fns) =>
        (arg) =>
            fns.reduce(
                (composed, f) => f(composed),
                arg
            )

    const convertToCivilianTime = clockTime =>
        compose(
            appendAMPM,
            civilianHours
        )(clockTime)

    const doubleDigits = civilianTime =>
        compose(
            prependZero("hours"),
            prependZero("minutes"),
            prependZero("seconds")
        )(civilianTime)

    const startTicking = () =>
        setInterval(
            compose(
                clear,
                getCurrentTime,
                abstractClockTime,
                convertToCivilianTime,
                doubleDigits,
                formatClock("hh:mm:ss tt"),
                display(log)
            ),
            oneSecond()
        )
    
    // Start the clock
    startTicking();