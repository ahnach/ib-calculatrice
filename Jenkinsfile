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
                bat 'npm run cypress'
            }
             post {
            
                      junit 'test-results.xml'
                
            }
        }
           
        stage('Deploy') {
            steps {
                echo ' deploy...'
                
            }
        }
    }
}

