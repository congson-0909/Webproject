package com.codeElevate.ServiceBookingSystem.dto;

import com.codeElevate.ServiceBookingSystem.enums.ReservationStatus;
import com.codeElevate.ServiceBookingSystem.enums.ReviewStatus;
import lombok.Data;

import java.util.Date;

@Data
public class ReservationDTO {
    // no usages
    private Long id;
    // no usages
    private Date bookDate;
    // no usages
    private String serviceName;
    // no usages
    private ReservationStatus reservationStatus;
    // no usages
    private ReviewStatus reviewStatus;
    // no usages
    private Long userId;
    // no usages
    private String userName;
    // no usages
    private Long companyId;
    // no usages
    private Long adId;

}
