package com.example.mobileworld.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/strategies")
@CrossOrigin("*")
public class StrategyController {
    @Autowired
    private ISecurityKeyGeneratorService skGeneratorService;
    @Autowired
    private CopierStrategyServiceImpl copierStrategyService;
    @Autowired
    private StrategyServiceImpl strategyService;


    /**
     * This method handles an HTTP PUT request for configuring a "Master" for a "Strategy" using the REST API.
     * @param strategyId the ID of the "Strategy" to add the "Master" to.
     * @param masterId   the ID of the "Master" to add to the "Strategy".
     * @param securityKey a security key required to authorize the operation.
     * @return a ResponseEntity object containing the HTTP status of the request (in this case ,message "added success")
     */
    @PutMapping("/{strategyId}/configMaster/{masterId}")
    public ResponseEntity<?> configMaster(@PathVariable("strategyId") Long strategyId,
                                          @PathVariable("masterId") Long masterId,
                                          @RequestBody String securityKey) {
        return ResponseEntity
                .ok()
                .body(strategyService.addMaster(strategyId, masterId,securityKey));
    }

    /**
     * method create api for strategy creating
     * @param strategyCreatingForm An object containing information to create a new strategy.
     * @return ResponseEntity contains newly created StrategyDTO object and HTTP code 200 OK.
     */
    @PostMapping()
    public ResponseEntity<StrategyDTO> createStrategy(@RequestBody StrategyCreatingForm strategyCreatingForm) {
        StrategyDTO strategyDTO = skGeneratorService.createStrategy(strategyCreatingForm);
        return ResponseEntity
                .ok()
                .body(strategyDTO);
    }
}