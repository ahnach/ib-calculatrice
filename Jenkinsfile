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
               
                bat 'npm run test'
                bat 'npm run test1'
            
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

