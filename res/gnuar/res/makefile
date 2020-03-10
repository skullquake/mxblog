CC=gcc
APPSRC=./src/a.c
APPOBJ=./bin/a.o
APPBIN=./bin/a.out
LIBSRC=./src/b.c
LIBOBJ=./bin/b.o
LIB=./lib/libb.a
CFLAGS=-I./include
all:$(APPBIN)
$(APPBIN): $(APPSRC) $(LIB)
	gcc $(CFLAGS) -L./lib $(APPSRC) -lb -o $(APPBIN)
$(LIBOBJ): $(LIBSRC)
	gcc $(CFLAGS) $(LIBSRC) -c -o $(LIBOBJ)
$(LIB): $(LIBOBJ)
	ar rcs $(LIB) $(LIBOBJ)
.phony:clean
clean:
	rm $(BIN) $(BINOBJ) $(LIB) $(LIBOBJ)
