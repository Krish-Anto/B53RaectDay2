function Card(props){
    console.log(props.details.plan)
    return <>
        <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">{props.details.plan}</h5>
              <h6 class="card-price text-center">{props.details.price}<span class="period">/month</span></h6>
              <hr />
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.user}</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.storage}</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.PublicProject}</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.communityAccess}</li>
                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                  Private Projects</li>
                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                  Phone Support</li>
                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.details.subdomain}
                </li>
                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                  Reports</li>
              </ul>
              <div class="d-grid">
                <a href="#" class="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
    </>
}
export default Card