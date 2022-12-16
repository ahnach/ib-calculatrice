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
               
                bat 'npm test'
                bat 'npm run-script test1'
                //junit 'test-results.xml'
                bat 'START /B npm sails lift'
                bat 'npm run cypress'
                
            }
        }
        stage('Deploy') {
            steps {
                echo ' deploy...'
                
            }
        }
    }
}

