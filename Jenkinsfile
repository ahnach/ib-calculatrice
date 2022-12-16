pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               bat 'npm install'
               
            }
        }
        stage('Test') {
            steps {
               
                bat 'npx test'
                bat 'npm run-script test1'
                bat 'START /B npm sails lift'
                bat 'npx cypress run'
                
            }
        }
        stage('Deploy') {
            steps {
                echo ' deploy...'
                
            }
        }
    }
}

