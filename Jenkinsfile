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

