#! /usr/bin/env node
import inquirer, { QuestionCollection } from "inquirer";
const questions:QuestionCollection=[{
    name:"Sentence",
    type:"string",
    message:"Enter your sentence to count the word"
}]
 const answers=await inquirer.prompt(questions);
 const words=answers.Sentence.trim().split(" ")
 console.log(words);
console.log(`Yor sentence word count is ${words.length}`)

