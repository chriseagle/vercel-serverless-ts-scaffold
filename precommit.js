import inquirer from 'inquirer';
import { exec } from 'child_process';

inquirer
  .prompt([
    {
			name: 'runBuild',
			type: 'list',
			message: 'Building before commit is required. Run build script?',
			default: 'Yes',
			choices: ['Yes', 'No'],
		},
  ]).then((answers) => {
    if(answers.runBuild === 'Yes') {
			exec('npm run build', {}, function() {
				console.log('Build complete...');
				console.log('Adding built files to the commit....');
				exec('git add api/.', {}, function(){
					console.log('Complete');
				});
			});
		}
  })
  .catch((error) => {
		console.error(error.message);
  });