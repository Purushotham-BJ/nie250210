package main
import(
	//"fmt"
	"net/http"
	"github.com/gin-gonic/gin"
)
type Flight struct {
	Id string
	FlightNumber string
	AirwayName string
	Source string
	Destination string
	Capacity int
	Price float32
}

func readAllFlights(c*gin.Context) {
	flights:=[] Flight{{Id: "201",FlightNumber:"AI 845",AirwayName:"AIRINDIA",Source:"Bengluru",Destination:"Delhi",Capacity:180,Price:15000.0},
	{Id: "202",FlightNumber:"AI 846",AirwayName:"AIRINDIA",Source:"Chennai",Destination:"Bengluru",Capacity:180,Price:8000.0},
}

	c.JSON(http.StatusOK,flights)
}
func readFlightById(c*gin.Context) {
	id := c.Param("id")	
	flights:=Flight{Id:id,FlightNumber:"AI 845",AirwayName:"AIRINDIA",Source:"Bengluru",Destination:"Delhi",Capacity:180,Price:15000.0}

	c.JSON(http.StatusOK,flights)
}

func createFlight(c*gin.Context) {
	var jbodyFlight Flight
	err := c.BindJSON(&jbodyFlight)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error":"Server Error"+ err.Error()})
		return
	}
	createdFlight:=Flight{Id:"100",FlightNumber:"AI 845",AirwayName:"AIRINDIA",Source:"Bengluru",Destination:"Delhi",Capacity:180,Price:15000.0}
	c.JSON(http.StatusCreated,gin.H{"message":"Flight created successfully","flight":createdFlight})
}
func updateFlight(c*gin.Context) {
	var jbodyFlight Flight
	err := c.BindJSON(&jbodyFlight)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error":"Server Error"+ err.Error()})
		return
	}
	updateFlight:=Flight{Id:"100",FlightNumber:"AI 845",AirwayName:"AIRINDIA",Source:"Bengluru",Destination:"Delhi",Capacity:180,Price:15000.0}
	c.JSON(http.StatusOK,gin.H{"message":"Flight updated successfully","flight":updateFlight})
}
func deleteFlight(c*gin.Context) {
	id := c.Param("id")	
	c.JSON(http.StatusOK,gin.H{"message":"Flight deleted successfully with id:"+id})
}
func main() {
	//router defining
	r := gin.Default()
	r.GET("/flights",readAllFlights)
	r.GET("/flights/:id",readFlightById)
	r.POST("/flights/",createFlight)
	r.PUT("/flights/:id",updateFlight)
	r.DELETE("/flights/:id",deleteFlight)
	//server (default port 8080) r.Run(":8080")
	r.Run(":8080")
	//fmt.Println(Flight1)
}