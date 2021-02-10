binary_semaphore: binary_semaphore.o
	gcc -D_REENTRANT -o binary_semaphore binary_semaphore.o -Wall -lrt  -lpthread
binary_semaphore.o: binary_semaphore.c
	gcc -c binary_semaphore.c
clean:
	rm -f *.o binary_semaphore
