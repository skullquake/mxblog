CC=gcc
APPSRC=./src/a.c
APPOBJ=./bin/a.o
APPBIN=./bin/a.out
LIBSRC=./src/b.c
LIBOBJ=./bin/b.o
LIB=./lib/libb.so
CFLAGS=-I./include
all:$(APPBIN)
$(APPBIN): $(APPSRC) $(LIB)
	gcc $(CFLAGS) -L./lib $(APPSRC) -lb -o $(APPBIN)
$(LIBOBJ): $(LIBSRC)
	gcc $(CFLAGS) -c -Wall -Werror -fpic $(LIBSRC) -o $(LIBOBJ)
$(LIB): $(LIBOBJ)
	gcc -shared $(LIBOBJ) -o $(LIB)
install: $(LIB)
	cp $(LIB) ~/../usr/lib
	cp ./include/* ~/../usr/include -r
.phony:clean 
clean:
	rm $(BIN) $(BINOBJ) $(LIB) $(LIBOBJ)
