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
                bat 'cypress run'
                bat 'npm test'
                bat 'npm test1'
            
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

