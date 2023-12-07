

//step1-3
{
    function add(numbers) {
        const num = numbers.split(/[,\n]/)
        let sum = 0
        if (num) {
            num.forEach(element => {
                sum += parseInt(element) ? parseInt(element) : 0
            });
        }

        return sum

    }
    console.log('test-1\ninput: "1,2,3"')
    console.log(add('1,2,3'))
    console.log('test-2\ninput: "1,2"')
    console.log(add('1,2'))
    console.log('test-3\ninput: ""')
    console.log(add(''))
    console.log('test-4\ninput: "1\\n2,2"')
    console.log(add('1\n2,2'))
}



//step 4-6
{
    function add(numbers) {
        let delimiter = ''
        if (numbers.includes('//')) {
            delimiter = numbers.split('\n')[0]
            tmp = delimiter.match(/\/\/(.)/)[1]

            numbers = numbers.split('\n')[1]
        }
        const num = numbers.split(new RegExp(`[,\n${delimiter}]+`))
        let sum = 0
        if (num) {
            num.forEach(element => {
                if (parseInt(element) < 0) {
                    throw new Error('negatives not allowed')
                } else {
                    sum += parseInt(element) <= 1000 ? parseInt(element) : 0
                }
            });
        }
        return sum

    }
    console.log('test-5\ninput: "//;\n1;2"')
    console.log(add('//;\n1;2'))
    console.log('test-6\ninput: "//;\n1002;2"')
    console.log(add('//;\n10002;2'))
    try {
        console.log('test-7\ninput: "//;\n-1;2"')
        console.log(add('//;\n-1;2'))
    } catch (error) {
        console.log(error.message)
    }
}