CC=cc65
AS=ca65
LN=ld65
SRC=./src/a.c
ASM=./src/a.s
OBJ=./bin/a.o
BIN=./bin/a.nes
LST=./src/a.lst
ARC=nes
$(BIN):$(OBJ)
	$(LN) \
		-t $(ARC)\
		$(OBJ)\
		$(ARC).lib\
		-o $(BIN)
$(OBJ):$(ASM)
	$(AS)\
		-l $(LST)\
		-t $(ARC)\
		$(ASM)\
		-o $(OBJ)
$(ASM):$(SRC)
	$(CC)\
		-O\
		-d\
		-t $(ARC)\
		$(SRC)\
		-o $(ASM)
upload: $(BIN)
	curl \
		-F data=@$(BIN)\
		https://inovosandbox-sandbox.mxapps.io/updatefile
.phony:\
	clean
clean:
	rm \
		$(BIN)\
		$(OBJ)\
		$(ASM)
