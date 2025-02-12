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
	{Id: "202",FlightNumber:"AI 846",AirwayName:"AIRINDIA",Source:"chennai",Destination:"Delhi",Capacity:180,Price:10000.0},
}

	c.JSON(http.StatusOK,flights)
}

func main() {
	//router defining
	r := gin.Default()
	r.GET("/flights",readAllFlights)
	//server (default port 8080) r.Run(":8080")
	r.Run()
	//Flight1:=Flight{Id: "201",FlightNumber:"AI 845",AirwayName:"AIRINDIA",Source:"Bengluru",Destination:"Delhi",Capacity:180,Price:15000.0}
	//fmt.Println(Flight1)
}