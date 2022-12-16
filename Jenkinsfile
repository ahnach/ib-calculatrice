pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               npm install
            }
        }
        stage('Test') {
            steps {
                npm Test
            
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

