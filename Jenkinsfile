pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'

                /* 
                *  Si jenkins est installé en local il n'est pas nécessaire de déployer node.sj 
                */

                echo 'Install node.js'
                bat 'npm install'               

            }
        }
        stage('Test') {
            steps {
                echo 'Stage Testing..'
                
                echo 'TU Generate test-result.xml'
                bat 'npm test'

                echo 'TETE Generate test-result-cypress-ci.xml'
                bat 'npm run cypress_report_ci'

            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
    post {
        always {
            
            echo 'junit TU Generate test-result.xml'
            junit 'test-results.xml'
            
            echo 'junit TETE Generate test-result-cypress-ci.xml'
            junit 'test-result-cypress-ci.xml'
        }
    }

}