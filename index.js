let CoffeeNum;
let CoffeeName;
let CoffeeType;
let SugarAmount;
let Milk;
let Size;
let Loop = false;

const myCoffee = 
{
    myMethod: function()
    {
        do
        {
            CoffeeNum = prompt("Яку каву ви бажаєте?\n1) Американо\n2) Американо з молоком\n3) Капучіно\n4) Лате")
            if (CoffeeNum == 1)
            {
                CoffeeName = "Американо"
                Loop = false
                myCoffee.StandartQuestions(CoffeeNum)
            }
            else if (CoffeeNum == 2)
            {
                CoffeeName = "Американо"
                do
                {
                    Milk = prompt("З вершками чи з молоком?\n1) З вершками\n2) З молоком");
                    if (Milk == 1)
                    {
                        CoffeeName += " з вершками"
                        Loop = false
                    }
                    else if (Milk == 2)
                    {
                        CoffeeName += " з молоком"
                        Loop = false
                    }
                    else
                    {
                        Loop = true
                        prompt("Невірне значення. Спробуйте ще раз")
                    }
                } while (Loop)
                
                myCoffee.StandartQuestions(CoffeeNum)
            }
            else if (CoffeeNum == 3)
            {
                do
                {
                    Size = prompt("Маленький капучіно чи великий?\n1) Великий\n2) Маленький");
                    if (Size == 1)
                    {
                        CoffeeName = "Великий капучіно"
                        Loop = false
                    }
                    else if (Size == 2)
                    {
                        CoffeeName = "Маленький капучіно"
                        Loop = false
                    }
                    else
                    {
                        Loop = true
                        prompt("Невірне значення. Спробуйте ще раз")
                    }
                } while (Loop)
                myCoffee.StandartQuestions(CoffeeNum)
            }
            else if (CoffeeNum == 4)
            {
                do
                {
                    Size = prompt("Маленький лате чи великий?\n1) Великий\n2) Маленький");
                    if (Size == 1)
                    {
                        CoffeeName = "Великий лате"
                        Loop = false
                    }
                    else if (Size == 2)
                    {
                        CoffeeName = "Маленький лате"
                        Loop = false
                    }
                    else
                    {
                        Loop = true
                        prompt("Невірне значення. Спробуйте ще раз")
                    }
                } while (Loop)
                myCoffee.StandartQuestions(CoffeeNum)
            }
            else
            {
                Loop = true;
                prompt("Невірне значення. Спробуйте ще раз")
            }
        } while (Loop)

    },

    StandartQuestions: function(typeOfWork)
    {
        do
        {
            CoffeeType = prompt("Використовувати Кубаш чи Арабіку?\n1) Кубаш\n2) Арабіка");
            if (CoffeeType == 1)
            {
                CoffeeType = "Кубаш"
                Loop = false
            }
            else if (CoffeeType == 2)
            {
                CoffeeType = "Арабіка"
                Loop = false
            }
            else
            {
                Loop = true
                prompt("Невірне значення. Спробуйте ще раз")
            }
        } while (Loop)
            
        SugarAmount = prompt("Скільки ложок цукру?");
        
        if (typeOfWork == 1)
        {
            console.log(`Ваш заказ:\n${CoffeeName}, ${CoffeeType}, ${SugarAmount} ложок цукру`)
            prompt(`Ваш заказ:\n${CoffeeName}, ${CoffeeType}, ${SugarAmount} ложок цукру`);
        }
        else if (typeOfWork == 2)
        {
            console.log(`Ваш заказ:\n${CoffeeName}, ${CoffeeType}, ${SugarAmount} ложок цукру`);
            prompt(`Ваш заказ:\n${CoffeeName}, ${CoffeeType}, ${SugarAmount} ложок цукру`);
        }
        else if (typeOfWork == 3)
        {
            console.log(`Ваш заказ:\n${CoffeeName}, ${CoffeeType}, ${SugarAmount} ложок цукру`);
            prompt(`Ваш заказ:\n${CoffeeName}, ${CoffeeType}, ${SugarAmount} ложок цукру`);
        }
        else if (typeOfWork == 4)
        {
            console.log(`Ваш заказ:\n${CoffeeName}, ${CoffeeType}, ${SugarAmount} ложок цукру`);
            prompt(`Ваш заказ:\n${CoffeeName}, ${CoffeeType}, ${SugarAmount} ложок цукру`);
        }
    }
}

myCoffee.myMethod()