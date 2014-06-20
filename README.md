![jsMathD](http://imgur.com/57v24ZY.png)
=======

JS library to quickly draw mathematical diagrams such as Sets, Relations, Maps etc
with the help of [Raphael](http://raphaeljs.com/) SVG js library

Demo
=======
Download this repository as zip or clone it using 
`git clone https://github.com/vidhu/jsMathD.git`. Then view the `index.html` file in your browser

Documentation
=======
###Relations
Relation diagrams can be generated using `JSMathD.Relation(data, options)`
```javascript
JSMathD.relation({
    set1: [1, 2, 3, 4],                  //Elements in set 1
    set2: ['D', 'B', 'C', 'A'],          //Elements in set 2
    rel: [[1, 'D'], [2, 'B'], [2, 'C']]  //Relations between set1 and set 2
},
{
    holder: 'relationExample',           //Container id where relation diagram
                                         //will be drawn
    fontSize: 50                         //Font size (scales the diagram)
}); 
```
=======
###Equivalence
Equivalence diagrams can be generated using `JSMathD.equivalence(data, options)`
```javascript
JSMathD.equivalence(
    {
        'Equiv Class' : [[0, 5, 10], [1, 2, 3, 4, 5], [2, 7, 12], [3, 8, 13], 2, 3, 4]
        //Equivalence set and its name
    },
    {
        holder: 'equivalenceExample',     //Container id where relation diagram
        width: 200,                       //Width of the container
        height: 205                       //height of the container
    }
); 
```
