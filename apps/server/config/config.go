package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

// Setup loads the environment variables specified in the .env file in the project root directory.
func Setup() {
	// Load environment variable from .env in root directory
	err := godotenv.Load()
	if err != nil {
		log.Println("error loading .env file")
	}
}

// Env gets the environment variable of the specified key.
func Env(key string) string {
	return os.Getenv(key)
}
