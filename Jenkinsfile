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
                junit 'test-results.xml'
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

