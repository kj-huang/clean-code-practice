#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

struct thread_data {
	unsigned long thread_id;
	unsigned long thread_count;
};

void *Hello(void* rank) {
	printf("Hello from thread %ld of %ld\n", ((struct thread_data*) rank) -> thread_id, ((struct thread_data*) rank) -> thread_count);

	return NULL;
}

int main(int argc, char* argv[]) {
	unsigned long thread;
	unsigned long thread_count = strtoul(argv[1], NULL, 10);
	struct thread_data* thread_array = malloc(thread_count * sizeof(struct thread_data));
	pthread_t* thread_handles = malloc(thread_count * sizeof(pthread_t));

	printf("Input argument numbers: %d\n", argc);

	for (thread = 0; thread < thread_count; thread++) {
		thread_array[thread].thread_id = thread;
		thread_array[thread].thread_count = thread_count;
		pthread_create(&thread_handles[thread], NULL, Hello, (void*) &thread_array[thread]);
	}

	for (thread = 0; thread < thread_count; thread++)
		pthread_join(thread_handles[thread], NULL);

	free(thread_handles);
	free(thread_array);
	return 0;
}