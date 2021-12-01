const companies = [
    {name: 'Google', category: 'tech-giant', start: 1981, end: 2003},
    {name: 'infosys', category: 'tech-giant', start: 1982, end: 2001},
    {name: 'Wipro', category: 'tech-giant', start: 2001, end: 2050},
    {name: 'Hcl', category: 'tech-giant', start: 2011, end: 2022},
    {name: 'Reliance', category: 'huge conglomeratet', start: 1987, end: 2007},
    {name: 'Zomato', category: 'Food Delivery services', start: 1986, end: 2023},
    {name: 'Paypal', category: 'tech-giant', start: 1976, end: 2023},
    {name: 'Tesla', category: 'tech-giant', start: 1901, end: 2024},
    {name: 'Amazon', category: 'tech-giant', start: 1980, end: 2000},
    {name: 'Sarvadhi Solutions', category: 'Multi-giant', start: 1975, end: 2021},
];

const ages = [33, 32, 30, 45, 20, 26, 47, 58, 90, 64]

//Combined Methods
const combined = ages.map(age => age*2).filter(age => age >= 40).sort((a,b) => a - b).reduce((total,age) => total + age, 0);
console.log(combined);


//Sort ages
// const SortAges = ages.sort((a,b) => a - b);
// console.log("Sorted Arrays",SortAges);

//reduce

// const ageSum = 0;
// for (let index = 0; index < ages.length; index++) {
//         ageSum += ages[index];
// } 

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log("Age Sum ==>", ageSum);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log("total years ==>", totalYears);

//forEach
// companies.forEach((company) => {console.log(company.name);})

// let canDrink = [];
// ages.forEach(element => {
//     if(element>26){
//         canDrink.push(element)
//     }    
// });

//Doing Above thing with filter
// const canDrink = ages.filter((age)=>{
//     if (age > 20) {
//         return true;
//     }
// });

// const canDrink = ages.filter( age => age>20 );

//Filtering
// const companytype = companies.filter( a => a.category === 'tech-giant' );

//Mapping 
// const squaredAges = ages.map(age => Math.sqrt(age)).map(age=>age*2);
// console.log(squaredAges);

//Mapped in a line 
// const companiesSorted = companies.sort((c1,c2) => c1 > c2 ? 1 : -1);
// console.log(companiesSorted);


//filter 
// companies.filter((company) => {console.log(company.name);})
// console.log(companies);