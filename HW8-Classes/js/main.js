class Student{
    constructor(university, course, fullName){
        this.university = university
        this.course = course
        this.fullName = fullName
        this.marks = []
        this.isDismissed = false
    }

    getInfo(){
        return `Студент ${this.course} курсу ${this.university}, ${this.fullName}`
    }

    getAverageMark(){
        if(!this.marks.length || this.isDismissed) return null

        const sumOfNumbers = this.marks.reduce((total, number) => +total + +number)
        return (sumOfNumbers/this.marks.length).toFixed(1)
    }

    get getMarks(){
        return (this.isDismissed)? null: this.marks
    }

    set setMark(mark){
        if(this.isDismissed){
            return null
        } else{
            this.marks.push(mark)
        }
    }

    get dismissed(){
        return this.isDismissed
    }

    dismiss(){
        this.isDismissed = true
    }

    recover(){
        this.isDismissed = false
    }

}


class BudgetStudent extends Student{
    constructor(university, course, fullName){
        super(university, course, fullName)
        const interval = setInterval(() => {
            if(this.getAverageMark() > 4 && !this.isDismissed){
                console.log(`Студент, ${this.fullName}, отримав 1400 грн. стипендії`)
            }
        },3000)
    }
} 
