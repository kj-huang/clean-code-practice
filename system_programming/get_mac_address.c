#include <stdio.h>  
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/socket.h>
#include <sys/ioctl.h>
#include <net/if.h> //ifreq

int main(int argc, char *argv[])
{
	int fd;
	struct ifreq ifr;
	char *iface = NULL;
	unsigned char *mac;

	if(argc != 2)
	{
		fprintf(stderr, "Usage: ./get_mac interface\n");
		exit(1);
	}
	
	strcpy(iface, argv[1]);

	fd = socket(AF_INET, SOCK_DGRAM, 0);

	ifr.ifr_addr.sa_family = AF_INET;
	strncpy(ifr.ifr_name , iface , IFNAMSIZ-1);

	ioctl(fd, SIOCGIFHWADDR, &ifr);

	close(fd);

	mac = (unsigned char *)ifr.ifr_hwaddr.sa_data;

	//display mac address
	printf("Mac : %.2x:%.2x:%.2x:%.2x:%.2x:%.2x\n" , mac[0], mac[1], mac[2], mac[3], mac[4], mac[5]);

	return 0;
}