import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { FacesService } from "./faces.service";

describe("FacesService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it("should be created", () => {
    const service: FacesService = TestBed.get(FacesService);
    expect(service).toBeTruthy();
  });

  it("should return the first valid id", () => {
    const service: FacesService = TestBed.get(FacesService);
    spyOn(service, "getRandomAdviceId").and.returnValue(2);

    expect(service.getSafeAdvice()).toEqual(2);
  });
  // [111, 203, 114, 75, 76, 46, 22, 24, 29, 34, 174];
  it("should continue to return valid ids", () => {
    const service: FacesService = TestBed.get(FacesService);
    let spy = spyOn(service, "getRandomAdviceId").and.returnValues(2, 7);

    expect(service.getSafeAdvice()).toEqual(2);
    expect(service.getSafeAdvice()).toEqual(7);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
