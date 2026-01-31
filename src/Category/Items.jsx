import { Grip } from 'lucide-react';
import { Coffee } from 'lucide-react';
import { Soup } from 'lucide-react';
import { Pizza } from 'lucide-react';
import { Hamburger } from 'lucide-react';
import { Utensils } from 'lucide-react';
import { Salad } from 'lucide-react';

const Category =[
    {
        id: 1,
        text : "All",
        icon :   <Grip className='text-green-500 ' size={55} />
    },
    {
        id: 2,
        text : "breakfast",
        icon :    <Coffee className='text-green-500' size={55} />
    },
    {
        id: 3,
        text : "soups",
        icon :    <Soup className='text-green-500' size={55}/>
    },
    {
        id: 4,
        text : "pasta",
        icon :    <Salad className='text-green-500' size={55}/>
    },
    {
        id: 5,
        text : "main_course",
        icon :   <Utensils className='text-green-500 ' size={55}/>
    },
    {
        id: 6,
        text : "pizza",
        icon :   <Pizza className='text-green-500' size={55}/>
    },
    {
        id: 7,
        text : "burger",
        icon :   <Hamburger className='text-green-500' size={55}/>
    },

]


export default Category