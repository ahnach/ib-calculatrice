pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               bat 'npm install'
               bat 'cypress run'
            }
        }
        stage('Test') {
            steps {
                npm test
                
            
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

