---
layout: post
custom_js: mouse_coords
---

Repository: https://github.com/dev-kvt/webservers

Two minimal HTTP server implementations written in pure Java using only core libraries (no external dependencies).

Directory layout:
 webservers/
├── singlethreadserver/
└── multithreadedserver/



Both servers implement a basic HTTP/1.1 request handler that reads the request line and headers, parses the method and path, and returns a simple response.

### Single-threaded server

- Uses a single thread to accept and process connections sequentially.
- Blocks on `serverSocket.accept()` and on each client socket I/O.
- Suitable only for understanding the basics or very low-traffic scenarios.

Typical flow:
1. Create `ServerSocket`
2. Loop: `accept()` → read request → parse → write response → close socket
3. One client at a time; next client waits until previous finishes

### Multithreaded server

- Main thread accepts connections in a loop
- For each accepted socket, spawns a new `Thread` to handle the request
- Allows concurrent processing of multiple clients

Typical flow:
1. Create `ServerSocket`
2. Loop: `accept()` → new Thread(runnable).start()
3. Each thread: read request → parse → write response → close socket

Resource usage scales with number of simultaneous connections (one thread + stack per connection).

### How to build and run

No build tool (Maven/Gradle) is used. Compile and run with javac/java.

Example for single-threaded:

git clone https://github.com/dev-kvt/webservers.git
cd webservers/singlethreadserver
javac *.java
java SimpleSingleThreadServer   

Same steps for multithreadedserver/.
Default port is usually 8080 or 8000 — check the code for the exact value.
Test with:
curl http://localhost:8080/
curl http://localhost:8080/index.html 

Implementation notes

Servers read the request line (GET /path HTTP/1.1) and headers until a blank line.
Most implementations return hardcoded responses ("Hello World", current time, or a static file).
No support for chunked encoding, persistent connections (keep-alive), or complex routing.
Error handling is minimal — usually just 200 OK or basic 404/500.
Path handling is rudimentary (no security checks for directory traversal).