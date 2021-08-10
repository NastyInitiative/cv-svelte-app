package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"time"
)

const port = "5000"

func main() {
	psLog := log.New(os.Stdout, "::: portfolio-svelte-app ::: ", log.LstdFlags)
	http.Handle("/", http.FileServer(http.Dir("../public")))
	server := &http.Server{
		Addr:         port,
		IdleTimeout:  120 * time.Second,
		ReadTimeout:  1 * time.Second,
		WriteTimeout: 1 * time.Second,
	}
	psLog.Printf("::: Starting app on port %v ::: ", port)
	server.ListenAndServe()
	timeOutContext, _ := context.WithTimeout(context.Background(), 30*time.Second)
	server.Shutdown(timeOutContext)
	psLog.Println("::: Gracefully shutting down... :::")
}
