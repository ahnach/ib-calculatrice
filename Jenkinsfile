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
                bat 'mocha tests/LifeCycle.test.js tests/unit/**/*.test.js  --reporter mocha-xunit-reporter'
                
            
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

