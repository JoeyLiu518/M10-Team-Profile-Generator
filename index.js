// Create all my const here
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateTeam = require('./util/generateHtml');
const teamMembers =[]
module.exports = teamMembers;

// const to reflect error or success
const writeTeam = (data) => {
    fs.writeTeam('./team.html', data, (err) => err ? console.error(err): console.log('Success'))
};

const teamCreation = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name:'role',
            message:'What is your role?',
            choices: ['Intern', 'Engineer', 'Manager'],
            validate: role => {
                if (role === 'Intern'){                      // Created if statement to based on user choice. Thought this would be the easiest way to do this? This was hard for me to read, as there are alot of end brackets and caused a lot of messups as well.
                    return addIntern();
                } else if (role === 'Engineer') {
                    return addEngineer();
                } else {
                    return addManager();
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: name => {
                if (name) {
                    return true;
                } else{
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'employeeid',
            message:'What is your ID?',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    return false
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:'What is your email?',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(answer => {
        const employeeInput = new Employee(answer.name, answer.employeeID, answer.email, answer.role);
        teamMembers.push(employeeInput)
        promptNext();
    })
};

const promptNext = () =>{
    return inquirer.prompt([
        {
            type:'list',
            Name: 'options',
            Message:"Please select one of the following.",
            choices:['Add a Intern', 'Add a Engineeer', 'Add a Manager', 'Team Complete']
        }

    ])
    .then(select => {
        switch(select.menu){
            case "add a intern":
                addIntern();
            case "add a engineer":
                addEngineer();
            case "add a manager":
                addManager();
            default:
                fs.writeFile(generateTeam(teamMembers))
        }
    })
};

// Create the Const for intern, engineer, and manager
const addIntern = () => {
    console.log(`Add Intern's details`)
};

return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your interns name?',
        validate: internName => {
            if (internName) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        messsage:'What is your interns id?',
        validate: internId => {
            if (internId) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'email',
        message: 'What is your interns email?',
        validate: internEmail => {
            if (internEmail) {
                return true;
            } else{
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school did your intern graduate from?',
        validate: internSchool => {
            if (internSchool) {
                return true;
            } else{
                return false;
            }
        }
    }
]).then(answer => {
    const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
    teamMembers.push(intern);
    promptNext();
});

const addEngineer = () => {
    console.log(`Add your Engineer's Details`)
};

return inquirer.prompt ([
    {
        type:'input',
        name:'name',
        message:'What is your engineers name?',
        validate: engieerName =>{
            if (engieerName) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your engineers id?',
        validate: engineerId => {
            if (engineerId) {
                return true;
            } else {
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your engineers email?',
        validate: engineerEmail => {
            if (engineerEmail) {
                return true;
            } else {
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your engineers github?',
        validate: engineerGithub => {
            if (engineerGithub) {
                return true;
            } else {
                return false
            }
        }
    },
]).then(answer => {
    const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
    teamMembers.push(engineer);
    promptNext()
})

const addManager = () => {
    console.log(`Add your Manager's Details`)
}

return inquirer.prompt ([
    {
        type:'input',
        name:'name',
        message:'What is your managers name?',
        validate: managerName => {
            if(managerName) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type:'input',
        name:'id',
        message:'What is your managers id?',
        validate: managerId => {
            if (managerId) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your managers email?',
        validate: managerEmail => {
            if (managerEmail) {
                return true;
            } else{
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'number',
        message: 'What is your managers office number?',
        validate: managerNumber => {
            if(managerNumber) {
                return true;
            } else{
                return false;
            }
        }
    }
]).then(answer =>{
    const manager = new Manager(answer.name, answer.id, answer.email, answer.number);
    teamMembers.push(manager);
    promptNext();
})

// Const to start everything
const start = () => {
    teamCreation()
};
start();
