package com.codeElevate.ServiceBookingSystem.controller;

public class CompanyController {
    @GetMapping("/bookings/{companyId}")
    public ResponseEntity<List<ReservationDTO>> getAllAdBookings(@PathVariable Long companyId) {
        return ResponseEntity.ok(companyService.getAllAdBookings(companyId));
    }



}

// add these fuction to file
