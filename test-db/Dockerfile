FROM ubuntu:20.04

# Set noninteractive mode for package installations
ENV DEBIAN_FRONTEND=noninteractive

# Install MySQL and other dependencies
RUN apt-get update && \
    apt-get install -y mysql-server && \
    apt-get clean
    
# Expose the MySQL port (optional, you can remove this if not needed)
EXPOSE 3306

CMD ["mysqld"]