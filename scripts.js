// Base class for Residence
class Residence {
    constructor(name, address, occupied = false) {
      this.name = name;
      this.address = address;
      this.occupied = occupied;
    }
  
    toggleOccupied() {
      this.occupied = !this.occupied;
    }
  }
  
  // DormRoom class extending Residence
  class DormRoom extends Residence {
    constructor(name, address, occupied, size) {
      super(name, address, occupied);
      this.size = size;
    }
  }
  
  // Apartment class extending Residence
  class Apartment extends Residence {
    constructor(name, address, occupied, numBedrooms) {
      super(name, address, occupied);
      this.numBedrooms = numBedrooms;
    }
  }
  
  // Student class
  class Student {
    constructor(name, studentId, gender, residence = null) {
      this.name = name;
      this.studentId = studentId;
      this.gender = gender;
      this.residence = residence;
    }
  
    assignResidence(residence) {
      this.residence = residence;
    }
  }
  
  // MaintenanceRequest class
  class MaintenanceRequest {
    constructor(description, status, student, assignedEmployee = null) {
      this.description = description;
      this.status = status;
      this.student = student;
      this.assignedEmployee = assignedEmployee;
    }
  
    updateStatus(newStatus) {
      this.status = newStatus;
    }
  }
  