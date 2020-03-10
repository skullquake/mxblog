CC=cl65
SRC=./src/a.c
BIN=./bin/a.nes
ARC=nes
$(BIN):$(SRC)
	$(CC) -t $(ARC) $(SRC) -o $(BIN)
upload: $(BIN)
	curl \
		-F data=@$(BIN)\
		https://inovosandbox-sandbox.mxapps.io/updatefile

.phony:\
	clean
clean:
	rm $(BIN)
