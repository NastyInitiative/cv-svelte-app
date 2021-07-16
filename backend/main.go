package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"time"
)

func main() {
	psLog := log.New(os.Stdout, "::: portfolio-svelte-app ::: ", log.LstdFlags)
	psServeMux := http.NewServeMux()
	psServeMux.Handle("/", http.FileServer(http.Dir("../public")))
	server := &http.Server{
		Addr:         ":5000",
		Handler:      psServeMux,
		IdleTimeout:  120 * time.Second,
		ReadTimeout:  1 * time.Second,
		WriteTimeout: 1 * time.Second,
	}
	psLog.Printf("::: Starting app on port %d ::: ", 5000)
	server.ListenAndServe()
	timeOutContext, _ := context.WithTimeout(context.Background(), 30*time.Second)
	server.Shutdown(timeOutContext)
	psLog.Println("::: Gracefully shutting down... :::")
}
