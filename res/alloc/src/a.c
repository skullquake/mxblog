#include<stdint.h>
#include<stdio.h>
#include<alloc.h>
int main(int argc,char** argv){
	uint8_t *buf=(uint8_t*)alloc(sizeof(uint8_t)*32);
	if(buf!=NULL){
		free(buf);
	}else{
		fprintf(stderr,"Cuold not allocate memory: Aborting\n");
		return -1;
	}
	return 0;
}
